from flask import Blueprint, render_template, redirect, url_for, flash, request
from flask_login import login_user, logout_user, login_required
from .forms import SignUpForm, LoginForm
from .models import User
from firebase_admin import auth as firebase_auth

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    form = SignUpForm()
    if form.validate_on_submit():
        try:
            user = firebase_auth.create_user(
                email=form.email.data,
                password=form.password.data,
                display_name=f"{form.first_name.data} {form.last_name.data}"
            )
            new_user = User(id=user.uid, email=user.email)
            db.session.add(new_user)
            db.session.commit()
            flash('Account created successfully!', 'success')
            return redirect(url_for('auth.login'))
        except Exception as e:
            flash(f"Error: {e}", 'danger')
    return render_template('signup.html', form=form)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        try:
            user = firebase_auth.get_user_by_email(form.email.data)
            login_user(User.query.get(user.uid))
            return redirect(url_for('main.home'))
        except Exception as e:
            flash(f"Error: {e}", 'danger')
    return render_template('login.html', form=form)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))
