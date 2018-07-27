using System;
using System.IO;
using System.Linq;
using NUnit.Framework;
using Xamarin.UITest;
using Xamarin.UITest.Queries;

namespace UITestDemo.UITest
{
    [TestFixture(Platform.Android)]
    [TestFixture(Platform.iOS)]
    public class BetterTests
    {
        IApp app;
        Platform platform;

        public BetterTests(Platform platform)
        {
            this.platform = platform;
        }

        [SetUp]
        public void BeforeEachTest()
        {
            app = AppInitializer.StartApp(platform);
        }

        [Test]
        public void Valid_LoginTest()
        {
            app.WaitForElement(LoginPageElements.EmailInput);
            app.EnterText(LoginPageElements.EmailInput, TestData.ValidEmailAddress);
            app.DismissKeyboard();
            app.Tap(LoginPageElements.PasswordInput);// Tap password 
            app.EnterText(TestData.ValidPassword);//Enter password
            app.DismissKeyboard();
            app.Tap(LoginPageElements.SignInButton); // Tap Sign in
            app.Tap(LoginPageElements.PassCodeOne);
            app.Tap(LoginPageElements.PassCodeTwo);
            app.Tap(LoginPageElements.PassCodeThree);
            app.Tap(LoginPageElements.PassCodeFour);
            app.WaitForElement(LoginPageElements.ConfirmPasscodeMessage);
            app.Tap(LoginPageElements.PassCodeOne);
            app.Tap(LoginPageElements.PassCodeTwo);
            app.Tap(LoginPageElements.PassCodeThree);
            app.Tap(LoginPageElements.PassCodeFour);
            app.WaitForNoElement(LoginPageElements.EmailInput);
            app.WaitForElement(MainMenuElements.MainMenuButton);
            app.Tap(MainMenuElements.MainMenuButton);
            app.WaitForElement(MainMenuElements.CurrentUser);
            app.WaitForElement(TestData.ValidEmailAddress);
        }

        [Test]
        public void ValidEmailFormat_LoginTest()
        {
            app.WaitForElement(LoginPageElements.EmailInput);
            app.EnterText(LoginPageElements.EmailInput, TestData.InvalidEmailAddress);
            app.DismissKeyboard();
            app.Tap(LoginPageElements.PasswordInput);// Tap password 
            app.EnterText(TestData.ValidPassword);//Enter password
            app.DismissKeyboard();
            app.Tap(LoginPageElements.SignInButton); // Tap Sign in
            app.WaitForElement(LoginPageElements.InvalidCredentialsError);
            app.WaitForElement(LoginPageElements.EmailInput);
            app.EnterText(LoginPageElements.EmailInput, TestData.ValidEmailAddress);
            app.DismissKeyboard();
            app.Tap(LoginPageElements.PasswordInput);// Tap password 
            app.EnterText(TestData.ValidPassword);//Enter password
            app.DismissKeyboard();
            app.Tap(LoginPageElements.SignInButton); // Tap Sign in
            app.Tap(LoginPageElements.PassCodeOne);
            app.Tap(LoginPageElements.PassCodeTwo);
            app.Tap(LoginPageElements.PassCodeThree);
            app.Tap(LoginPageElements.PassCodeFour);
            app.WaitForElement(LoginPageElements.ConfirmPasscodeMessage);
            app.Tap(LoginPageElements.PassCodeOne);
            app.Tap(LoginPageElements.PassCodeTwo);
            app.Tap(LoginPageElements.PassCodeThree);
            app.Tap(LoginPageElements.PassCodeFour);
            app.WaitForNoElement(LoginPageElements.EmailInput);
            app.WaitForElement(MainMenuElements.MainMenuButton);
            app.Tap(MainMenuElements.MainMenuButton);
            app.WaitForElement(MainMenuElements.CurrentUser);
            app.WaitForElement(TestData.ValidEmailAddress);
        }

        [Test]
        public void ValidPassword_LoginTest()
        {
            app.WaitForElement(LoginPageElements.EmailInput);
            app.EnterText(LoginPageElements.EmailInput, TestData.ValidEmailAddress);
            app.DismissKeyboard();
            app.Tap(LoginPageElements.PasswordInput);// Tap password 
            app.EnterText(TestData.InvalidPassword);//Enter password
            app.DismissKeyboard();
            app.Tap(LoginPageElements.SignInButton); // Tap Sign in
            app.WaitForElement(LoginPageElements.InvalidCredentialsError);
            app.WaitForElement(LoginPageElements.EmailInput);
            app.EnterText(LoginPageElements.EmailInput, TestData.ValidEmailAddress);
            app.DismissKeyboard();
            app.Tap(LoginPageElements.PasswordInput);// Tap password 
            app.EnterText(TestData.ValidPassword);//Enter password
            app.DismissKeyboard();
            app.Tap(LoginPageElements.SignInButton); // Tap Sign in
            app.Tap(LoginPageElements.PassCodeOne);
            app.Tap(LoginPageElements.PassCodeTwo);
            app.Tap(LoginPageElements.PassCodeThree);
            app.Tap(LoginPageElements.PassCodeFour);
            app.WaitForElement(LoginPageElements.ConfirmPasscodeMessage);
            app.Tap(LoginPageElements.PassCodeOne);
            app.Tap(LoginPageElements.PassCodeTwo);
            app.Tap(LoginPageElements.PassCodeThree);
            app.Tap(LoginPageElements.PassCodeFour);
            app.WaitForNoElement(LoginPageElements.EmailInput);
            app.WaitForElement(MainMenuElements.MainMenuButton);
            app.Tap(MainMenuElements.MainMenuButton);
            app.WaitForElement(MainMenuElements.CurrentUser);
            app.WaitForElement(TestData.ValidEmailAddress);
        }
    }
}
