var figureSelected = null;
const modal = document.querySelector(".modal");
const imageView = modal.children[0].children[0];

function SelectFigure({target})
{
  if (figureSelected)
  {
    figureSelected.parentElement.classList.remove('figureSelected');
  }
  target.parentElement.classList.add('figureSelected');
  figureSelected = target;
  imageView.setAttribute('src', figureSelected.getAttribute('src'));
}

function CloseOutModal({target})
{
  if (window.event.target === modal)
  {
    CloseModal();
  }
}

function CloseModal()
{
  modal.classList.add('closed');
}

function OpenModal()
{
  modal.classList.remove('closed');
}