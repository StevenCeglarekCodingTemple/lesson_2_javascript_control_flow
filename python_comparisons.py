# Python function (only one way)
def greet(name):
    return f"Hello, {name}!"

# Python lambda (similar to arrow functions)
greet_lambda = lambda name: f"Hello, {name}!"

print(greet("Alice"))
print(greet_lambda("Bob"))


# Python equivalent
def check_age(age):
    if age >= 18:
        return "Adult"
    else:
        return "Minor"

def get_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"


def is_even(number):
    return "Even" if number % 2 == 0 else "Odd"