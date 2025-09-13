# FM-DX WebServer Client-Side Login Plugin

A **modern client-side login overlay plugin** for FM-DX WebServer, implemented in plain JavaScript.  
This plugin adds a **beautiful login form with “Remember Me” functionality**, without affecting the real admin login. Ideal for guest access or demo purposes.

---

## Features

- **Client-side authentication** (does not affect the server’s admin password).  
- **Remember Me**: saves the logged-in user in `localStorage`.  
- **Modern UI**: gradient card, blur background, shadow effects.  
- **Smooth animations**: fade-in and shake effects on incorrect login.  
- **Responsive and lightweight**: works on all modern browsers.  

---

## Installation

1. Place the plugin JS file in your FM-DX WebServer plugin folder.  
2. Include the script in your web interface page (before `</body>`):  

```html
<script src="path/to/login-plugin.js"></script>
```

3. Open the FM-DX WebServer interface in your browser. The login overlay should appear automatically.

---

## Usage

1. Configure guest users in the JS file:

```js
const users = {
    "guest1": "pass1",
    "guest2": "pass2"
};
```

2. Users can login using their username and password.  
3. Optionally check “Remember Me” to stay logged in across page reloads.  

---

## Customization

You can easily modify:  

- **Colors & styling** in the `card` and `overlay` sections.  
- **Animation duration and type** in the `@keyframes fadeIn` and `@keyframes shake`.  
- **User list** in the `users` object.  

---

## Security Notes

- **This plugin is client-side only** and does **not replace server-side authentication**.  
- Do **not** use this plugin to protect sensitive admin features.  
- Only use it for guest/demo interfaces.  

---

## Screenshots

![Login Overlay](https://via.placeholder.com/400x250.png?text=FM-DX+Login+Plugin)

---

## License

MIT License — you are free to use, modify, and distribute this plugin.

---

## Credits

- **Plugin Development:** Your Name  
- **Technical Assistance & JS Design Guidance:** ChatGPT (OpenAI GPT-5 Mini)  

---

## Contact

For issues or feature requests, open a GitHub issue in this repository.

