import { spawn } from "child_process";

//init_setup
function init_setup(pathToSrc) {
  let child = spawn("bash", ["init_setup.sh",pathToSrc]);

  child.stdout.on("data", (data) => {
    console.log(`${child}: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`${child}: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`${child} exited with code ${code}`);
  });
}

//init aws setup
function init_aws_setup(loginNameAndIp,awsPrivateKeyPath) {
  let child = spawn("bash", ["init_aws_setup.sh",loginNameAndIp,awsPrivateKeyPath]);

  child.stdout.on("data", (data) => {
    console.log(`${child}: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`${child}: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`${child} exited with code ${code}`);
  });
}

//
//
//
// child = spawn("bash", ["tp.sh"]);

// child.stdout.on("data", (data) => {
//   console.log(`${child}: ${data}`);
// });

// child.stderr.on("data", (data) => {
//   console.error(`${child}: ${data}`);
// });

// child.on("close", (code) => {
//   console.log(`${child} exited with code ${code}`);
// });

//backup
// function backup(dbName) {
//   child = spawn("bash", ["backup.sh", dbName]);

//   child.stdout.on("data", (data) => {
//     console.log(`${child}: ${data}`);
//   });

//   child.stderr.on("data", (data) => {
//     console.error(`${child}: ${data}`);
//   });

//   child.on("close", (code) => {
//     console.log(`${child} exited with code ${code}`);
//   });
// }

//gen_aes_key
function gen_aes_key() {
  let child = spawn("bash", ["gen_aes_key.sh"]);

  child.stdout.on("data", (data) => {
    console.log(`${child}: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`${child}: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`${child} exited with code ${code}`);
  });
}

//gen_key_pair
function gen_key_pair() {
  let child = spawn("bash", ["gen_key_pair.sh"]);

  child.stdout.on("data", (data) => {
    console.log(`${child}: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`${child}: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`${child} exited with code ${code}`);
  });
}

//encrypt file
function enc_file_aes(locationOfBackupSql,locationOfAesKey) {
  let child = spawn("bash", [
    "enc_file_aes.sh",
    "location/of/backup.sql",
    "location/of/aes256.key",
  ]);

  child.stdout.on("data", (data) => {
    console.log(`${child}: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`${child}: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`${child} exited with code ${code}`);
  });
}

//get_aws_pub_key
function get_aws_pub_key() {
  let child = spawn("bash", ["get_aws_pub_key.sh"]);

  child.stdout.on("data", (data) => {
    console.log(`${child}: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`${child}: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`${child} exited with code ${code}`);
  });
}

// child=spawn('bash',['enc_file.sh'])

// child.stdout.on('data', (data) => {
//   console.log(`${child}: ${data}`);
// });

// child.stderr.on('data', (data) => {
//   console.error(`${child}: ${data}`);
// });

// child.on('close', (code) => {
//   console.log(`${child} exited with code ${code}`);
// });

//send_to_aws.sh
function send_to_aws(pathToAesKeyOrPathToEncryptedData) {
  let child = spawn("bash", ["send_to_aws.sh", pathToAesKey]);

  child.stdout.on("data", (data) => {
    console.log(`${child}: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`${child}: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`${child} exited with code ${code}`);
  });
}

//the below code is for transferring 
// function send_to_aws()
// child = spawn("bash", ["send_to_aws.sh", "path/to/encrypted_file"]);

// child.stdout.on("data", (data) => {
//   console.log(`${child}: ${data}`);
// });

// child.stderr.on("data", (data) => {
//   console.error(`${child}: ${data}`);
// });

// child.on("close", (code) => {
//   console.log(`${child} exited with code ${code}`);
// });

const modules={init_setup,init_aws_setup,gen_aes_key,gen_key_pair,enc_file_aes,get_aws_pub_key,send_to_aws}
export default modules;