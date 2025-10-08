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

# Python equivalent
def count_to_ten():
    for i in range(1, 11):
        print(i)


def print_array_items(items):
    for item in items:
        print(item)

def countdown_from(n):
    while n > 0:
        print(n)
        n -= 1
    print("Blast off!")

def find_first_even(numbers):
    for i, num in enumerate(numbers):
        if num % 2 == 0:
            print(f"First even number: {num} at index {i}")
            break

def print_odds_only(numbers):
    for num in numbers:
        if num % 2 == 0:
            continue
        print(f"Odd number: {num}")