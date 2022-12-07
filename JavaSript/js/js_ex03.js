var subtracao, n1, n2

n1=parseInt(prompt("entre com um valor"))
n2=parseInt(prompt("entre com outro valor"))

if(n1>n2)
{
    subtracao=n1-n2
    alert("O resultado" +subtracao)
}
else{
    alert("O programa nao permite resultado negativo")
}