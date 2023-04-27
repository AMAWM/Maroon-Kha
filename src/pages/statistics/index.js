// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const SecondPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Statistics Interface'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Statistics will be shown here (Under work)</Typography>
            <Typography>TBA</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SecondPage
