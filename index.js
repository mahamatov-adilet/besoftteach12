let text = ['h', 'e', 'l', 'l', 'o', ' g', 'i', 't', 'h', 'u', 'b']
	
let dd = document.getElementById('aa')
let s = 0;

setInterval(()=> {
	dd.innerHTML += text[s]
	s++;
	if(s == 12){
		s = 0
		dd.innerHTML = ''
	}

}, 500)
