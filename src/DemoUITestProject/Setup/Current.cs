using System;
using Xamarin.UITest;

namespace UITestDemo.UITest.Setup
{
    // You shouldn't need to worry about this class on a day-to-day basis
    public static class Current
    {
        static IApp _app;
        static Platform? _platform;

        public static IApp App => _app;
        public static Platform Platform => _platform.Value;

        public static void SetApp(IApp app, Platform platform)
        {
            _app = app;
            _platform = platform;
        }

        public static string OnPlatform(string iOS, string android)
        {
            if (_platform == null)
                throw new InvalidOperationException("Platform has not yet been set");

            if (_platform == Xamarin.UITest.Platform.iOS)
                return iOS;
            return android;
        }
    }
}
