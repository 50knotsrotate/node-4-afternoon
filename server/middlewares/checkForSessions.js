module.exports = {
    checkSession: (request, response, next) => { 
        const { session } = request
        if (!session.user) { 
            session.user = {
                username: '', 
                cart: [],
                total: 0
            }
            next()
        }
        next()
    }
}