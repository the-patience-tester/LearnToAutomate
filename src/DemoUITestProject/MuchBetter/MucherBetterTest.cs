using NUnit.Framework;
using Xamarin.UITest;

namespace UITestDemo.UITest.Login
{
    public class MucherBetterTests : Setup.BaseTests
    {
        public MucherBetterTests(Platform p) : base(p)
        {
        }

        [Test]
        public void Valid_LoginTest()
        {
            Actions.EnterLoginDetails(TestData.ValidEmailAddress, TestData.ValidPassword);
            Actions.SetSimplePasscode();
            Actions.ConfirmCurrentUsersEmail(TestData.ValidEmailAddress);
        }

        [Test]
        public void ValidEmailFormat_LoginTest()
        {
            Actions.EnterLoginDetails(TestData.InvalidEmailAddress, TestData.ValidPassword);
            Actions.ConfirmInvalidCredentialsError();
            Actions.EnterLoginDetails(TestData.ValidEmailAddress, TestData.ValidPassword);
            Actions.SetSimplePasscode();
            Actions.ConfirmCurrentUsersEmail(TestData.ValidEmailAddress);
        }

        [Test]
        public void ValidPassword_LoginTest()
        {
            Actions.EnterLoginDetails(TestData.ValidEmailAddress, TestData.InvalidPassword);
            Actions.ConfirmInvalidCredentialsError();
            Actions.EnterLoginDetails(TestData.ValidEmailAddress, TestData.ValidPassword);
            Actions.SetSimplePasscode();
            Actions.ConfirmCurrentUsersEmail(TestData.ValidEmailAddress);
        }
    }
}
