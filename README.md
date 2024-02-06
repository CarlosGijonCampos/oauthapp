### Instructions to make the mobile app run

generating the ios and android folders:
	npm run (android or ios) 
	
	
IOS
	npm install --verbose  in the root
	cd ios
	pod install --verbose
	when pod install is done, open oauthapp.xcworkspace in xcode and run the app from xcode
	
	
Android

	install java jdk (tried with jre but was not the way to go:  jre-8u391-macosx-aarch64)
	https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
	
	connect an android phone and run npm run android in root
	or
	
	npm run android in the root
	download android studio and open the android folder as a project
	run there the project



--google account comments---

in the google account, I created two new OAuth credentials, one for android and iOS, although the credential that works for the android app was the one that was created initially for Web, also i added test user emails

In supabase i added android and ios OAuthKeys to the Authentication provider