new Promise((resolve) => {
    
    for(let i = 1; i <=3; i++) {
        console.log(i)
        setTimeout(() => {
            resolve()
        }, 1000)
    }
})

.then(x => console.log('Done')
)
