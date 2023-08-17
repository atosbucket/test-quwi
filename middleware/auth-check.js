export default function(context) {

    if(process.client) {
        // если клиент, передаем req как null
        context.store.dispatch('initAuth', null)
    } else {
        // если сервер
        context.store.dispatch('initAuth', context.req)
    }
    
}