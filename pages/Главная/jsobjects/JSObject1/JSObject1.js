export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	run: async () => {
		try {
			const {email} = jsonwebtoken.verify(appsmith.store.token, 'secret');
			return email;
		}
		catch(error){			
		}
	},
	logOut: () => {
		return removeValue('token')
		.then(() => navigateTo('page auth'));
	}
}