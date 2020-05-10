var selectOne = document.querySelector('.dropbtn.one')
var selectTwo = document.querySelector('.dropbtn.two')
var link = document.querySelector('.link')

var selectOneId = null
var selectTwoId = null

function changeHref(valOne, valTwo) {
	if (valOne && valTwo) {
		link.href = 'compare.html?id1=' + selectOneId + '&id2=' + selectTwoId
	}
}

selectOne.addEventListener('change', function() {
	selectOneId = selectOne.querySelector('option:checked').dataset.id
	changeHref(selectOneId, selectTwoId)
})

selectTwo.addEventListener('change', function() {
	selectTwoId = selectTwo.querySelector('option:checked').dataset.id
	changeHref(selectOneId, selectTwoId)
})
