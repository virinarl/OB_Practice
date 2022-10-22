"""Primera parte:
Crear una función con tres parámetros que sean números que se suman entre sí.
Llamar a la función en el main y darle valores.

Segunda parte:
Crear una clase coche.
Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
Una función que incremente el número de puertas que tiene el coche.
Crear un objeto miCoche en el main y añadirle una puerta.
Mostrar el número de puertas que tiene el objeto."""

# Primera parte

def suma(num1, num2, num3):
    return num1+num2+num3

class Coche():
    def __init__(self, puertas):
        self.puertas = puertas
        
    def incrementoPuertas(self):
        self.puertas +=1
        return self.puertas


def main():
    numero1= 10
    numero2= 20
    numero3= 30
    
    resultado = suma(numero1,numero2,numero3)
    print(resultado)
    
    miCoche = Coche(4)
    
    miCoche.puertas = miCoche.incrementoPuertas()
    print(miCoche.puertas)
    
    
    
main()