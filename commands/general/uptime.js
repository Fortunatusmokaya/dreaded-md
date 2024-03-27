/* A for apple */


const Uptime = async(client, m, sendd, runtime) => {



await sendd(`${runtime(process.uptime())}`);


}
export default Uptime;