export default function(context) {
    // const token = localStorage.getItem("token");
    // console.log("###################", token);
    if(!context.store.getters.checkAuthUser) {
        context.redirect('/login')
    }
}
