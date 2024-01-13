const title = document.querySelector('#title')
        title.style.fontSize = '25px'
        title.style.weight = '1000'
        title.style.fontFamily = 'sans-serif'
        title.style.margin = '0'
        title.style.padding = '0'


        const subTitle = document.querySelector('#sub-title')
        subTitle.style.textDecoration = 'underline'
        subTitle.style.margin = '0'
        subTitle.style.padding = '0'

        const author = document.querySelector('#author')
        author.style.margin = '0'
        author.style.paddingBottom = '30px'
        author.style.textDecoration = 'underline'




        const container = document.querySelector('div')
        container.style.maxWidth = '700px'
        container.style.position = 'relative'
        container.style.left = '33%'
        container.style.textAlign = 'center'

        const divs = document.querySelectorAll('div')
        
        function isPrime(number) {
            if (number <= 1) return false;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false; 
                }
            }
            return true; 
        }

        for(let i = 1; i<= 102; i++ ){  
            divs[i].style.display = 'inline-block'
            divs[i].style.width = '100px'
            divs[i].style.height= '100px'
            divs[i].style.margin = '1px'
            divs[i].style.marginBottom = '5px'
            divs[i].innerHTML = `${i-1}`
            divs[i].style.paddingTop = '30px'
            divs[i].style.color = 'white'
            divs[i].style.fontSize = '50px'
            if (isPrime(i)) {
                divs[i].style.backgroundColor = '#FD5E53';
            } else {
                if (i % 2 === 1) {
                    divs[i].style.backgroundColor = '#21BF73';
                } else {
                    divs[i].style.backgroundColor = '#FDDB3A';
                }
            }
        }