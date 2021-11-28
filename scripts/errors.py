class CommandNotFoundException(Exception):
    def __init__(self, command, registered: list):
        self.command = command
        self.registered: list = registered

    def __str__(self):
        return f'''
        The Command {self.command} was not found in the registered commands.
        Registered commands: {self.registered}
        '''


class NoCommandInputException(Exception):
    def __str__(self):
        return '''
        Usage: python manage.py some_argument
        '''
