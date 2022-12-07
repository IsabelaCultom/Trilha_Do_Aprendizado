var cont
var resposta
cont=0

while(cont<10)
{
    alert("Como deixar o usuario louco com while em "+cont)
    cont++
}
for(cont=0; cont<10;cont++)
{
    alert("Como deixar o usuario louco com for em "+cont)
    cont++
}
do{
    resposta=prompt("prosseguir?")
}while(resposta=="sim");