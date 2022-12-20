# Nested Promises  
      
    async function rotateColors(e) {
        var box = document.getElementById("box");
      // TODO: Rotate the colors of the box from red to blue to green.

      Promise.resolve().then(()=>{
      setTimeout(() => { box.style.backgroundColor = "red"; }, 4000)}).then(()=>{
        return new Promise((resolve,reject)=>{
          setTimeout(() => { box.style.backgroundColor = "blue"; resolve()}, 4000)})
        })
      .then(t=>
      setTimeout(() => { box.style.backgroundColor = "green"; }, 4000)) 

    }
