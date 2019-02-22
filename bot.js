client.event
async def on_member_join(member):
    print("That A Member Named " + member.name + " Join The Server !")
    await client.send_message(member, "الرسالة الي تريدها في الخاص")
    print("Sent Message To " + member.name)

    role = discord.utils.get(member.server.roles, name="U.T,!")
    await client.add_roles(member, role)
    print (message.channel, "Added role '" + role.name + "' to " + member.name)
