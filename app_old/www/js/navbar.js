/* inyecta la barra inferior cuando el DOM está listo */
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop();        // archivo actual
  const active = file => (file === path ? 'active' : '');
  document.getElementById('navbar').innerHTML = `
    <div class="navbar">
      <a href="index.html"              class="${active('index.html')}"><i class="fa-solid fa-house"></i></a>
      <a href="horario.html"            class="${active('horario.html')}"><i class="fa-solid fa-calendar"></i></a>
      <a href="visitas.html"            class="${active('visitas.html')}"><i class="fa-solid fa-map"></i></a>
      <a href="materiales/index.html"   class="${active('index.html') && location.pathname.includes('materiales') ? 'active' : ''}"><i class="fa-solid fa-book"></i></a>
      <a href="profundiza.html"         class="${active('profundiza.html')}"><i class="fa-solid fa-gear"></i></a>
    </div>`;
});