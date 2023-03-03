import { createServer } from '../server/src/app.js'

import { typeDefs } from './src/graphql/typedef/typedefs.js'
import { resolvers } from './src/graphql/resolvers/resolvers.js'
import { connect } from './src/db.js'

createServer(typeDefs, resolvers)
connect()
