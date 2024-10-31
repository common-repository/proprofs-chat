var PPChat = {
    step: 2,
    email: "",
    site_id: "",
    el: function(e) {
        return document.getElementById(e)
    },
    Signin: function() {
        this.el("password_error").style.display = "none", this.el("login_id_error").style.display = "none";
        var e = this.el("pswd").value,
            t = {
                password: e
            },
            i = this.el("email").value;
        if (this.email = i, "" == i) return this.el("login_id_error").innerHTML = "Please provide email", this.el("login_id_error").style.display = "block", !1;
        if ("" == e) return this.el("password_error").innerHTML = "Please provide password", this.el("password_error").style.display = "block", !1;
        if (!this.validEmail(i)) return this.el("login_id_error").innerHTML = "Enter valid email", this.el("login_id_error").style.display = "block", !1;
        this.el("loader_image").style.display = "inline", t.login_id = i, t.step = this.step;
        this.callRequest(t, "https://www.proprofschat.com/api/wordpress/wp-login.php");
        document.cookie = "site_id="+this.site_id;
    },
    callRequest: function(e, t) {
        var i = "string" == typeof e ? e : Object.keys(e).map(function(t) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
        }).join("&");
        PPChat.isIE8() ? (PPChat.call.onload = PPChat.outputResult, PPChat.call.open("POST", t, !0), PPChat.call.send(i)) : (PPChat.call.open("POST", t, !0), PPChat.call.onreadystatechange = this.handler, PPChat.call.send(i))
    },
    handler: function(e) {
        4 == PPChat.call.readyState && 200 == PPChat.call.status && PPChat.outputResult()
    },
    outputResult: function() {
        var e = JSON.parse(PPChat.call.responseText);
        console.log(e);
        if (void 0 !== e.action && "wp-dashboard" == e.action) return 1 == e.status ? window.open(e.redirect, "_blank") : alert(e.msg), !1;
        "ERROR" == e.status ? (this.el("loader_image").style.display = "none", "Incorrect password" == e.error ? (this.el("password_error").innerHTML = e.error, this.el("password_error").style.display = "block") : "Incorrect email" == e.error && (this.el("login_id_error").innerHTML = e.error, this.el("login_id_error").style.display = "block")) : "1" == e.status && "Y" == e.admin ? (this.el("register_site").value = e.siteid, this.el("register_email").value = this.email, this.el("private_key").value = e.private_key, this.el("activate-form").submit()) : (this.el("loader_image").style.display = "none", alert("Something Went Wrong. Please Try Later."))
    },
    disconnect: function() {
		console.log("come del fun");
		document.cookie = "site_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        this.el("disconnect-form").submit();
    },
    isIE8: function() {
        return !!window.XDomainRequest
    },
    validEmail: function(e) {
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
    },
    init: function(e) {
        console.log(e);
        console.log("IN");
        void 0 === e.private_key || "" == e.private_key ? this.el("login-form").innerHTML = this.login_form() : this.el("panel-form").innerHTML = this.logged_form(), this.email = e.email, this.site_id = e.site_id, this.private_key = e.private_key, document.addEventListener("keyup", function(e) {
            e.preventDefault(), 13 === e.keyCode && PPChat.Signin()
        })
    },
    godashboard: function() {
        var e = {
            email: this.email,
            site_id: this.site_id,
            private_key: this.private_key
        };
        this.callRequest(e, "https://www.proprofschat.com/api/wordpress/go-dashboard.php")
    },
    login_form: function() {
        return '<h1>Login to your ProProfs Chat account</h1><form method=\"post\" id=\"activeform\"><fieldset><div class=\"form-field\"><label>Email</label><input type=\"text\" name=\"login_id\" id=\"email\"><div style=\"display:none; color:red;\" id=\"login_id_error\">Please provide email</div></div><div class=\"form-field\"><label>Password</label><input type=\"password\" name=\"password\" id=\"pswd\"><div style=\"display:none; color:red;position: absolute;\" id=\"password_error\">Please provide password</div></div></fieldset><button type=\"button\" id=\"login_button\" class=\"btn-blue pull-left\" onclick=\"PPChat.Signin()\">Login</button><img id=\"loader_image\" src=\"https://www.proprofschat.com/signup/images/loader.gif\"></form><form method=\"post\" action=\"admin.php?page=ppct_settings\" id=\"activate-form\"><input type=\"hidden\" name=\"site\" id=\"register_site\"><input type=\"hidden\" name=\"reg_email\" id=\"register_email\"><input type=\"hidden\" name=\"private_key\" id=\"private_key\"><input type=\"hidden\" name=\"action\" value=\"ppct_register_site\"><input type=\"hidden\" name=\"ppct_security_register_site\" value=\"' + window.ppct_nounce + '\"></form><div class=\"tiptext pull-left\">Not registered yet? <a href=\"https://www.proprofschat.com/signup/?utm_source=wordpress_plugin\" target=\"_blank\">Signup for an account</a></div>'
    },
    logged_form: function() {
        return '<h2>Bingo! You\'ve successfully installed ProProfs Chat Plugin</h2><form method=\"post\" action=\"admin.php?page=ppct_settings\" id=\"disconnect-form\"><input type=\"hidden\" name=\"action\" value=\"disconnect_site\"><input type=\"hidden\" name=\"ppct_security_disconnect_site\" value=\"' + window.ppct_nounce_disconnect + '\"></form><div class=\"tiptext\">You\'re logged in right now <a class=\"log-out-line\" href=\"javascript:\" onclick=\"PPChat.disconnect()\">(Log Out)</a></div><a type=\"button\" href=\"javascript:\" id=\"login_button\" class=\"btn-blue pull-left\" onclick=\"PPChat.godashboard()\">Go To Dashboard</a> <div class=\"border-line\"></div> <div class=\"rating-line\">Thank you for choosing ProProfs! Your <a class=\"log-out-line\"href=\"https://wordpress.org/support/plugin/proprofs-chat/reviews/?rate=5#new-post\" target="blank">5-star rating on WordPress</a> would boost our motivation! Need help? Read our <a class=\"log-out-line\" href=\"https://chathelp.proprofs.com/live-chat-in-wordpress\" target="blank">Documentation</a><br>If you`re not happy, please <a class=\"log-out-line\"href=\"https://chathelp.proprofs.com/submit-a-ticket\" target="blank">get in touch with us</a>, so that we can sort it out. Thank you!</div> '
    }
};
PPChat.call = PPChat.isIE8() ? new window.XDomainRequest : new XMLHttpRequest;
