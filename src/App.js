import './App.css'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

// List
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

import logo from './static/images/Instagram-Logo.svg'

let nonFollowers = [
  {
    profileName: 'asd',
    userName: 'Asd',
    avatar: logo,
  },
  {
    profileName: 'asd1',
    userName: 'Asd1',
    avatar: logo,
  },
  {
    profileName: 'asd2',
    userName: 'Asd2',
    avatar: logo,
  },
]

function App() {
  return (
    <div className='App'>
      <Container component='main' maxWidth='sm'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ mt: 2 }} component='h5' variant='h5'>
            Enter Username:
          </Typography>
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='@username or https://www.instagram.com/username/'
            name='username'
          />
          <Button sx={{ mt: 1, mb: 1 }} variant='contained'>
            Show Non-Followers
          </Button>
        </Box>

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography sx={{ mt: 2, ml: 'auto', mr: 'auto' }} component='h5' variant='h5'>
            Non-Followers:
          </Typography>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {nonFollowers.map((nonFollowers) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    size='sm'
                    src={nonFollowers.avatar}
                    sx={{
                      border: '2px solid #CA2168',
                    }}
                  />
                </ListItemAvatar>
                <ListItemText primary={nonFollowers.profileName} secondary={nonFollowers.userName} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </div>
  )
}

export default App
