function addCandidate() {
    let $candidateList = document.getElementById('Candidate-list')
    let $input = document.createElement('input')
    $input.name = 'candidates'
    $input.className = 'form-control';
    $input.placeholder = 'Tên ứng viên'

    $candidateList.appendChild($input)
}

document.getElementById('add-candidate-btn').addEventListener('click', addCandidate);


function validateForm(){
    let name_cuoc_bau_cu = document.form.name_cuoc_bau_cu.value;
    let so_phieu_bau = document.form.so_phieu_bau_cu.value;
    let candidates = document.form.candidates.value;
    let validation = document.form.validation.value;

    if (name_cuoc_bau_cu==null || name_cuoc_bau_cu==""){  
        alert("Tên cuộc bầu cử can't be blank");  
        return false;  
    }else if(typeof(name_cuoc_bau_cu) != String){
        alert("This must be a name");
        return false;
    }else if (so_phieu_bau==null || so_phieu_bau==""){  
        alert("Số phiếu bầu can't be blank");  
        return false;  
    }else if(typeof(so_phieu_bau) != Number){
        alert("This must be a number");
        return false;
    }else if (candidates==null || candidates==""){  
        alert("Số phiếu bầu can't be blank");  
        return false;  
    }else if(typeof(candidates) != String){
        alert("This must be a string");
        return false;
    }else if (validation==null || validation==""){  
        alert("Số phiếu bầu can't be blank");  
        return false;  
    }else if(typeof(validation) != Number){
        alert("This must be a number");
        return false;
    }
}


