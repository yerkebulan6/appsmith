export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	},
	userToken: async () => {
		const token = appsmith.store.token;
		return jsonwebtoken.decode(token, 'secret');
	},
	downloadPDF: async () => {
    let data = Tabs1.selectedTab
    const blob = new Blob([data], {type: 'application/pdf'});
    const url = URL.createObjectURL(blob);
    await download(url, "Данные сотрудника.pdf", "application/pdf")
}


}