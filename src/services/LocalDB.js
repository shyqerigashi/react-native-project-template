/**
 *
 * LocalDB file is created to save data to local storage of device
 *
 */

var RNFS = require('react-native-fs');

// create a path you want to write to
// :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
// but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
var path = RNFS.DocumentDirectoryPath + '/projectTemplateReactNative.json';

var localFileContents = {devices: []};
var fileWasRead = false;

function writeLocalFileContentsToFile () {
	console.log('WRITING')
	console.log(localFileContents)
	return RNFS.writeFile(path, JSON.stringify(localFileContents), 'utf8')
	.then((success) => {
		console.log('FILE WRITTEN!');
	})
	.catch((err) => {
		console.log('FILE NOT WRITTEN!');
		console.log(err.message);
	});
}

function readFile() {
	return new Promise(resolve => {
		if (fileWasRead) {
			resolve(localFileContents)
		}

		RNFS.readFile(path, 'utf8')
		.then(contents => {
			fileWasRead = true
			try {
				localFileContents = JSON.parse(contents);
				resolve(localFileContents)
			} catch (e) {}
		})
		.catch(err => {
			localFileContents = {devices: []};
			writeToFile(JSON.stringify(localFileContents))
			resolve(localFileContents)
		});
	})
}
/*
//This is an example of how to get data from local storage
export function getSavedDeviceIds () {
	return new Promise(resolve => {
		readFile().then(contents => resolve(contents.devices.filter(id => !!id)))
	})
}

//This is an example of how to save data to local storage
export function saveNewDeviceId (deviceId) {
	return new Promise((resolve, reject) => {
		if (! deviceId) {
			reject("INVALID_ID");
			return;
		}

		if (deviceIdExists(deviceId)) {
			reject('DEVICE_EXISTS');
			return;
		}

		localFileContents.devices.unshift(deviceId)

		writeLocalFileContentsToFile();

		resolve(localFileContents)
	})
}
*/
