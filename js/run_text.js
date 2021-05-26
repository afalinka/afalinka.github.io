<script type="text/javascript">
<!--
function tekst(msg,ctrlwidth)
{
msg = " "+msg
newmsg = msg
while (newmsg.length < ctrlwidth) {newmsg += msg}
document.write ('<form name="Tekst">')
document.write ('<input name="tekst" style="border:0;font-weight:bold;" value= "'+newmsg+'" size= '+ctrlwidth+' />')
document.write ('</form>')
prokrutka()
}
function prokrutka()
{
NowMsg=document.Tekst.tekst.value
NowMsg=NowMsg.substring(1,NowMsg.length)+NowMsg.substring(0,1)
document.Tekst.tekst.value = NowMsg
bannerid=setTimeout("prokrutka()",56)
}
//-->
</script>
<script type="text/javascript">
tekst("Бегущая в JavaScript",50)
</script>