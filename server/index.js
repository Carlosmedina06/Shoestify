import { createServer } from '../server/src/app.js'

import { typeDefs } from './src/graphql/typedef/typedefs.js'
import { context } from './src/graphql/context/context.js'
import { resolvers } from './src/graphql/resolvers/resolvers.js'
import { connect } from './src/db.js'

createServer(typeDefs, resolvers, context)
connect()
