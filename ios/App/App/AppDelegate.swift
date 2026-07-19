import UIKit
import Capacitor

// Standardní iOS rozvržení: obsah začíná pod status barem a končí nad home
// indikátorem. POZOR: Capacitor dělá `view = webView` (webview JE kořenový
// pohled), takže ho tady vyjmeme, obalíme kontejnerem v barvě papíru a
// ukotvíme do jeho safe area — kotvit webview k vlastnímu safe area nefunguje.
class BounceFreeViewController: CAPBridgeViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        guard let wv = webView else { return }

        let container = UIView(frame: UIScreen.main.bounds)
        container.backgroundColor = UIColor(red: 0.980, green: 0.957, blue: 0.925, alpha: 1) // --paper #FAF4EC
        view = container
        container.addSubview(wv)
        wv.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            wv.topAnchor.constraint(equalTo: container.safeAreaLayoutGuide.topAnchor),
            wv.bottomAnchor.constraint(equalTo: container.safeAreaLayoutGuide.bottomAnchor),
            wv.leadingAnchor.constraint(equalTo: container.leadingAnchor),
            wv.trailingAnchor.constraint(equalTo: container.trailingAnchor),
        ])

        // pojistky proti houpání a bočnímu tahání (bounces řeší už Capacitor)
        wv.scrollView.alwaysBounceVertical = false
        wv.scrollView.alwaysBounceHorizontal = false
        wv.scrollView.showsVerticalScrollIndicator = false
        wv.scrollView.showsHorizontalScrollIndicator = false
    }
}

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Hra se hraje s telefonem v ruce nebo na stole — displej nesmí zhasínat.
        // (Webové Wake Lock API ve WKWebView není, řeší se nativně.)
        application.isIdleTimerDisabled = true
        return true
    }

    func applicationWillResignActive(_ application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
        // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(_ application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        // Called when the app was launched with a url. Feel free to add additional processing here,
        // but if you want the App API to support tracking app url opens, make sure to keep this call
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }

    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        // Called when the app was launched with an activity, including Universal Links.
        // Feel free to add additional processing here, but if you want the App API to support
        // tracking app url opens, make sure to keep this call
        return ApplicationDelegateProxy.shared.application(application, continue: userActivity, restorationHandler: restorationHandler)
    }

}
