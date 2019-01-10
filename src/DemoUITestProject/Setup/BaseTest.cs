using System;
using NUnit.Framework;
using Xamarin.UITest;

namespace UITestDemo.UITest.Setup
{

    [TestFixture(Platform.iOS, Category = "iOS")]
    [TestFixture(Platform.Android, Category = "Android")]
    public class BaseTests
    {
        public IApp app { get; protected set; }

        protected readonly Platform Platform;

        static readonly DateTime StartTime = DateTime.Now;

        public BaseTests(Platform platform)
        {
            Platform = platform;
        }


        [SetUp]
        public void BeforeEachTest()
        {
            app = AppInitializer.StartApp(Platform);
        }
    }
}
