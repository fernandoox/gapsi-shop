Arquitectura "Feature-First"
Se organiza en torno a las features o funcionalidades de la aplicación (e.g., ProductList, Cart, Header), donde cada funcionalidad tiene sus propios componentes y lógica relacionada agrupada en un único lugar

Context API para estado global
Se utiliza la Context API para gestionar el estado global, como el carrito de compras. Este enfoque permite que el estado de la aplicación sea accesible en cualquier parte sin necesidad de pasar props manualmente a través de varios niveles de componentes.

Resumen de la Arquitectura:
Modular: Cada componente o funcionalidad está encapsulada en su propio módulo (carpeta).
Feature-driven: Las carpetas y archivos están organizados por características o módulos.
Reutilización: Hooks, componentes y funciones auxiliares son altamente reutilizables.
Estado centralizado: Context API para gestionar el estado global (como el carrito de compras).
Escalable: Al seguir este patrón, es fácil añadir nuevas características o expandir la aplicación sin afectar la estructura existente.
