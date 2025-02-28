export const psw_gen = (len) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let password = [];

    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password.push(chars[randomIndex]);
    }

    return password;
};
