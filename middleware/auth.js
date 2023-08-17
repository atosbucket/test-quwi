export default function(context) {

    if(!context.store.getters.checkAuthUser) {
        context.redirect('/admin/auth')
    }
 
    // webapi key  AIzaSyCcFderO-gm1_ki1Z1UhzpGfh0AXY9OKkw 
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    
}