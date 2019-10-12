// include internal libraries
const Passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt


var Bcrypt = require('bcrypt')


// import internal libraries
const Models = require('../models')


/**
 * set up passport local strategy to authenticate staff based on
 * email and password
 * 
 */
Passport.use(
        'staff-local',
        new LocalStrategy({ usernameField: 'email', passwordField: 'password' },
            async function(email, password, done) {

                // check if user exists 
                let user = await Models.Staff.findOne({ email }).exec()

                // details were wrong
                if ( !user || !user._id ) return done(false)

                // check if password is correct
                let match = await Bcrypt.compare(password, user.password)

                // if passwords dont match return
                if ( !match ) return done(false) 
                
                let { _id, name, joined_on } = user
                
                return done(null, { _id, name, email, joined_on })

            }
        ) // new LocalStrategy( .. )

    ) // Passport.use( .. )





/**
 * set up jwt authentication middleware
 */


// set jwt options
var jwt_opts = {}
jwt_opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwt_opts.secretOrKey = process.env.JWT_SECRET



// handle jwt authentication for users
Passport.use(

        'user-jwt',
        new JwtStrategy(
            jwt_opts,
            async function(jwt_payload, done) {

                let { id, timestamp } = jwt_payload.data

                // check if timestamp is older than 60 minutes, it implies its expired
                if ((Date.now()) - timestamp > 3600000) {
                    return done(false)
                }

                // get the user details
                let rec = await Models.FosterRequest.findOne({ ref: id })

                if (!rec) return done(false)

                return done(null, rec)

            }
        ) // new JwtStrategy( .. )

    ) // Passport.use( .. )



// handle jwt authentication for staffers
Passport.use(
        'staff-jwt',
        new JwtStrategy(
            jwt_opts,
            async function(jwt_payload, done) {

                let { id, timestamp } = jwt_payload.data

                // check if the token is overdue -- older than an hour
                if ((Date.now - timestamp) > 3600000) {
                    return done(false)
                }

                // get the staff 
                let staff = await Models.Staff.findById(id)
                
                // if no result was found, return
                if (!staff) return done(false)

                let { password, ...uzer } = staff._doc
                return done(null, uzer)

            }
        ) // new JwtStrategy( .. )
    ) // Passport.use( .. )

    
// handle jwt authentication for staffers with ADMIN priviledge
Passport.use(
    'admin-staff-jwt',
    new JwtStrategy(
        jwt_opts,
        async function(jwt_payload, done) {

            let { id, timestamp } = jwt_payload.data

            // check if the token is overdue -- older than an hour
            if ((Date.now - timestamp) > 3600000) {
                return done(false)
            }

            // get the staff 
            let staff = await Models.Staff.findOne({ _id: id, priviledge: 'ADMIN' })

            // if no result was found, return
            if (!staff) return done(false)

            let { password, ...uzer } = staff._doc
            return done(null, uzer)

        }
    ) // new JwtStrategy( .. )
) // Passport.use( .. )
