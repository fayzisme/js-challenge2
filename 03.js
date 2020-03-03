for (let i = 1; i <= 3; i++) {
    console.log(i);
    
    const a = () => {
        return new Promise (resolve => {
            setTimeout(() => {
                resolve()
            }, 1000);
        }) 
    }

    await a();
  }

  console.log('Done')
