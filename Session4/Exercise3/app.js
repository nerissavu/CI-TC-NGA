function addCandidate() {
    let $candidateList = document.getElementById('Candidate-list')
    let $input = document.createElement('input')
    $input.name = 'candidates'
    $input.className = 'form-control';
    $input.placeholder = 'Tên ứng viên'

    $candidateList.appendChild($input)
}

document.getElementById('add-candidate-btn').addEventListener('click', addCandidate);
