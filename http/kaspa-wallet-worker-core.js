//import "@karlsen/wallet-worker/worker.js";
//if(typeof window == 'undefined')
	globalThis['window'] = globalThis;

require("@karlsen/wallet-worker/worker.js")
