export default function(context) {
    if(store.state.auth.loggedIn) {
        context.redirect('/login')
    }
}
