module.exports = {
    info: {
        names: ["test", "command-name-1", "command-name-2"], /*Name*/
        description: "Commands description", /*Description*/
        usage: "Commands usage", /*Usage*/
    },
    config: {
        permLevel: {
            author: [] /*Message Author Perm*/
        }
    },
    async run(client, message, args) {
        message.channel.send('Meska.js is so cool')
    }
}
