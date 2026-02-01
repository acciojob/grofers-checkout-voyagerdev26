const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let td=document.querySelectorAll(".prices");
	let totalPrice=0;
	for(let t of td){
		totalPrice+=+t.innerText;
	}
	let tr=document.createElement("tr");
	tr.id="ans";
	let t1=document.createElement("td");
	let t2=document.createElement("td");
	t1.innerText="TotalPrice";
	t2.innerText=totalPrice;
	tr.append(t1,t2);
	document.body.querySelector("table").append(tr);
  
};

getSumBtn.addEventListener("click", getSum);

