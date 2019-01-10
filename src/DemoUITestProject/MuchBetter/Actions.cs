using System;
using UITestDemo.UITest.Setup;
using Xamarin.UITest;

namespace UITestDemo.UITest.Login
{
    public static class Actions
    {
        static IApp app => Current.App;

        /// <summary>
        /// Enters the login details.
        /// </summary>
        /// <param name="email">Email.</param>
        /// <param name="password">Password.</param>
        public static void EnterLoginDetails(string email, string password)
        {
            EnterEmailAddress(email);
            EnterPassword(password);
            TapSignIn();
        }

        /// <summary>
        /// Sets a simple passcode.
        /// </summary>
        public static void SetSimplePasscode()
        {
            EnterSimplePasscode();
            app.WaitForElement(LoginPageElements.ConfirmPasscodeMessage);
            EnterSimplePasscode();
            app.WaitForNoElement(LoginPageElements.EmailInput);
        }

        /// <summary>
        /// Confirms the currently logged in user by checking the email address in the main menu
        /// </summary>
        /// <param name="email">Email.</param>
        public static void ConfirmCurrentUsersEmail(string email)
        {
            app.WaitForElement(MainMenuElements.MainMenuButton);
            app.Tap(MainMenuElements.MainMenuButton);
            app.WaitForElement(MainMenuElements.CurrentUser);
            app.WaitForElement(email);
        }

        /// <summary>
        /// Confirms the user is presented the correct invalid credentials error.
        /// </summary>
        public static void ConfirmInvalidCredentialsError()
        {
            app.WaitForElement(LoginPageElements.InvalidCredentialsError);
        }

        /// <summary>
        /// Enters the email address.
        /// </summary>
        /// <param name="email">Email.</param>
        static void EnterEmailAddress(string email)
        {
            app.WaitForElement(LoginPageElements.EmailInput);
            app.ClearText(LoginPageElements.EmailInput);
            app.EnterText(LoginPageElements.EmailInput, email); 
            app.DismissKeyboard();
        }

        /// <summary>
        /// Enters the password.
        /// </summary>
        /// <param name="password">Password.</param>
        static void EnterPassword(string password)
        {
            app.WaitForElement(LoginPageElements.PasswordInput);
            app.Tap(LoginPageElements.PasswordInput);
            app.ClearText(LoginPageElements.PasswordInput);
            app.EnterText(password);
            app.DismissKeyboard();
        }

        /// <summary>
        /// Taps the sign in button.
        /// </summary>
        static void TapSignIn()
        {
            app.WaitForElement(LoginPageElements.SignInButton);
            app.Tap(LoginPageElements.SignInButton);
            app.WaitForNoElement(LoginPageElements.SignInButton);
        }

        /// <summary>
        /// Enters the simple passcode.
        /// </summary>
        static void EnterSimplePasscode()
        {
            app.Tap(LoginPageElements.PassCodeOne);
            app.Tap(LoginPageElements.PassCodeTwo);
            app.Tap(LoginPageElements.PassCodeThree);
            app.Tap(LoginPageElements.PassCodeFour);
        }
    }
}
