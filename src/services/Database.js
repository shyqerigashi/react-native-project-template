/**
 *
 * Database file is created to create, read, update, display data from/to database in firebase
 *
 */

import Firebase from './Firebase'

import { getTimeFromDate } from '../helpers'

let db = Firebase.database();

export default db;

export function getDevices () {
	return db.ref('devices');
}

export function getDevicesByIds (ids) {
	return new Promise(resolve => {
		var promises = ids.filter(id => !! id).map(key => db.ref("devices").child(key).once("value"));

		Promise.all(promises).then(snapshots => {
			resolve(
				snapshots
				.filter(snapshot => !! snapshot.val())
				.map(snapshot => snapshot.val())
			)
		});
	})
}

export function changeDeviceStatus (deviceId, isOn) {
	return db.ref('devices').child(deviceId).child('status').set(isOn ? 'on' : 'off');
}

export function changeDeviceActiveFrom (deviceId, time) {
	return db.ref('devices').child(deviceId).child('fromTime').set(time);
}

export function changeDeviceActiveTo (deviceId, time) {
	return db.ref('devices').child(deviceId).child('toTime').set(time);
}

export function saveDevice (device) {
	return db.ref('devices').child(device.id).set(device);
}

export function getDevice(deviceId) {
	return db.ref('devices').child(deviceId);
}

export function saveDeviceData(device) {
	if (! device.id) {
		var newPostRef = db.ref('devices').push();
		device.id = newPostRef.key;	
	}

	return new Promise(resolve => {
		db.ref('devices').child(device.id).set(device).then(() => resolve(device))
	})
}

export function getPages () {
	return db.ref('pages');
}

export function getPage(pageId) {
	return db.ref('pages').child(pageId);
}
