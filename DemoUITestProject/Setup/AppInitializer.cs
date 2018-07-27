using System;
using System.IO;
using System.Linq;
using Xamarin.UITest;
using Xamarin.UITest.Queries;

namespace UITestDemo.UITest
{

    /// <summary>
    /// Initialises the application to run. This file is included in your project directly
    /// as the ConfigureApp class needs to exist in the same project as the tests.
    /// </summary>

    public class AppInitializer
    {
        public static IApp StartApp(Platform platform)
        {
            IApp app;

            // TODO: If the iOS or Android app being tested is included in the solution 
            // then open the Unit Tests window, right click Test Apps, select Add App Project
            // and select the app projects that should be tested.
            //
            // The iOS project should have the Xamarin.TestCloud.Agent NuGet package
            // installed. To start the Test Cloud Agent the following code should be
            // added to the FinishedLaunching method of the AppDelegate:
            //
            //    #if ENABLE_TEST_CLOUD
            //    Xamarin.Calabash.Start();
            //    #endif

            if (platform == Platform.Android)
            {
                app = ConfigureApp
                    .Android
                    .EnableLocalScreenshots()
                    .StartApp();
            }
            else
            {
                app = ConfigureApp
                    .iOS
                    .EnableLocalScreenshots()
                    .StartApp();
            }

            Setup.Current.SetApp(app, platform);

            return app;
        }
    }
}
