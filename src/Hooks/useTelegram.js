const tg = window.Telegram.WebApp;
export function useTelegram(){
    const onClose = () =>{
        tg?.close()
    }

    const showTelegramAlert = (message, callback) =>{
        tg?.showAlert(message, callback)
    }
    const showTelegramConfirm = (message, callback) => {
        tg?.showConfirm(message,callback)
    }
    const expandApp = () =>{
        tg?.expand()
    }

    const colorScheme = () =>{
        return tg?.colorScheme;
    }

    const closeApp = () =>{
        tg?.close()
    }

    return {
        tg,
        user:tg.initDataUnsafe?.user,
        onClose,
        showTelegramConfirm,
        showTelegramAlert,
        expandApp,
        closeApp,
        colorScheme
    }
}

