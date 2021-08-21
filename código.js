    function retornaData(data) {
        if (!data) {
            return data;
        }
        split = data.split('/');
        return new Date(split[1] + "/" + split[0] + "/" + split[2]);
    }
   
    var data_ocorrida = document.getElementsByName('date');
    var message = document.getElementsByName('res');
    var dataCurrente = new Date();
    
    var dia = retornaData(data_ocorrida).getDate() > dataCurrente.getDate()
    var mes = retornaData(data_ocorrida).getMonth() >= dataCurrente.getMonth()
    var ano = retornaData(data_ocorrida).getFullYear() >= dataCurrente.getFullYear()
    

    if (dia & mes & ano) {
        message.innerHTML = `A data do ocorrido não pode ser maior que a data atual`;
    }
    else{
        window.alert('Reclamação enviada!');
    }
