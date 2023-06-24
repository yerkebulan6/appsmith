export default {
	createHash: (password) => {
		return dcodeIO.bcrypt.hashSync(password, 10);
	},
	verifyHash: (password, hash) => {
		return dcodeIO.bcrypt.compareSync(password, hash);	
	},
	createToken: (email) => {
		return jsonwebtoken.sign({email}, 'secret', {expiresIn: 60*60});
	},
	signUp: () => {
		const email = email_su.text;
		const password = password_su.text;

		const pHash = this.createHash(password);
		return signup.run({email, pHash})
			.then(() => showAlert('Account created!', 'success'))
			.then(() => storeValue('token', this.createToken(email)))
			.then(() => navigateTo('login2'))
			.catch(e => showAlert(e.message, 'error'));
	},

	signIn: async () => {
		const email = email_si.text;
		const password = password_si.text;

		const [user] = await finduser.run({email});

		if(user && this.verifyHash(password, user?.password)) {
			storeValue('token', this.createToken(email))
				.then(() => navigateTo('Главная'))
		} else {
			showAlert('Invalid email or password', 'error');
		}
	}
}